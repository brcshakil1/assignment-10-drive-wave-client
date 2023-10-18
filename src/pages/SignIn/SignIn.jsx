import signInBg from "../../assets/bg/signIn-out-bg-desktop-2.jpg";
const SignIn = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${signInBg})`,
      }}
    >
      <h3>Sign in</h3>
    </div>
  );
};

export default SignIn;
