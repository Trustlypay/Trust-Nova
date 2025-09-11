import UserContext from "./user-context";

export default function UserContextProvider(props) {
  return (
    <UserContext.Provider
      value={{
        userDetails: props.userDetails,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
