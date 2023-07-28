'use client';

import { useCallback, useState } from "react";
import { 
  FieldValues,
  SubmitHandler,
  useForm 
} from "react-hook-form";

import Input from "@/app/components/inputs/Input";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  // Sets the initial state of AuthForm
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  // Changes the state of AuthForm based on current state
  const toggleVariant = useCallback(() => {
    if (variant == 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
    // [variant] is a dependency here
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant == 'REGISTER') {
      // Axios Register
    }

    if (variant == 'LOGIN') {
      // NextAuth SignIn
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign In
  }

  // Return the view
  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
          bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
        >
          <form
            className="space-y-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input />
          </form>
      </div>
    </div>
  );
}

export default AuthForm;