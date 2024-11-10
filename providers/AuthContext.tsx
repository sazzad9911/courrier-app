// AuthContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApi } from "@/constants/API";
import Loader from "@/components/Loader";

interface User {
  address: string;
  balance: number;
  businessName: string;
  email: string;
  id: string;
  image: string;
  isAdmin: boolean;
  name: string;
  password: string;
  phone: string;
  pushToken: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  reload: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (userData: User, authToken: string) => {
    setUser(userData);
    setToken(authToken);
    await AsyncStorage.setItem("authToken", authToken);
    await AsyncStorage.setItem("user", JSON.stringify(userData));
  };
  const reload = async () => {
    if (!token) {
      console.error("Token is required for fetching user details.");
      return;
    }

    try {
      const userRes = await getApi("/apis/user/details", token);
      setUser(userRes.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const logout = async () => {
    setUser(null);
    setToken(null);
    await AsyncStorage.removeItem("authToken");
    await AsyncStorage.removeItem("user");
  };

  const loadSession = async () => {
    const storedToken = await AsyncStorage.getItem("authToken");
    const storedUser = await AsyncStorage.getItem("user");
    if (storedToken && storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user,
        reload,
      }}
    >
      {isLoading ? <Loader visible /> : children}
    </AuthContext.Provider>
  );
};
