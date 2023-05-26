import { Toaster } from "react-hot-toast";

export const Toast = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--color-gray-3)",
            boxShadow: "0 0 4px var(--color-gray-1)",
          },
        }}
      />
    </div>
  );
};
