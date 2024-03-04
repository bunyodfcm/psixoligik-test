const Login = () => {
  return (
    <div className="mx-auto">
      <form className="border border-primary-900 inline-block p-4">
        <label htmlFor="">Login</label>
        <br />
        <input type="text" className="border border-primary-900" />
        <br />
        <label htmlFor="">Parol</label>
        <br />
        <input type="text" className="border border-primary-900" />
        <div>
          <button>Kirish</button>
          <button>Sinab ko'rish</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
