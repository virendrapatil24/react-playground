import { useEffect, useState } from "react";
import { User } from "../services/user-services";
import UserService from "../services/user-services";
import { AxiosError, CanceledError } from "axios";
import { set } from "react-hook-form";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const { request, cancel } = UserService.getAll<User>();
      request
        .then((response) => {
          setUsers(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) {
            console.log("Request canceled", error.message);
          } else if (error instanceof Error) {
            setError(error.message);
          } else if (error instanceof AxiosError) {
            setError(error.message);
          }
          setError(error.message);
          setIsLoading(false);
        });
  
      return () => {
        cancel();
      };
    }, []);

    return {users, error, isLoading, setUsers, setError};

}

export default useUsers;