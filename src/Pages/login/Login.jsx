// import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import styles from "./login.module.css";

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       setError("All fields are required");
//       return;
//     }

//     console.log("Login:", form);

//     // Navigate to dashboard
//     navigate("/dashboard");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h2 className={styles.title}>Welcome Back</h2>

//         {error && <div className={styles.error}>{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className={styles.inputGroup}>
//             <input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//               className={styles.input}
//             />
//           </div>

//           <div className={styles.inputGroup}>
//             <input
//               type="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={(e) =>
//                 setForm({ ...form, password: e.target.value })
//               }
//               className={styles.input}
//             />
//           </div>

//           <button type="submit" className={styles.button}>
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;



import { useState } from 'react';
import { useNavigate } from 'react-router';
import styles from "./login.module.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    // Simulate login request
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className={styles.page}>

      {/* LEFT PANEL */}
      <div className={styles.left}>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>🌿</span>
          <span className={styles.brandName}>Nexcent</span>
        </div>
        <div className={styles.leftContent}>
          <h1>Grow smarter, <br /><span className={styles.green}>farm better.</span></h1>
          <p>Log in to access your dashboard, track your farm's performance, and manage your tools — all in one place.</p>
          <div className={styles.features}>
            <div className={styles.featureItem}>✅ Real-time crop monitoring</div>
            <div className={styles.featureItem}>✅ Smart irrigation controls</div>
            <div className={styles.featureItem}>✅ Yield forecasting & analytics</div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.right}>
        <div className={styles.card}>

          <h2 className={styles.title}>Welcome back</h2>
          <p className={styles.subtitle}>Sign in to your Nexcent account</p>

          {error && (
            <div className={styles.error}>
              <span>⚠️</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>

            {/* EMAIL */}
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                autoComplete="email"
              />
            </div>

            {/* PASSWORD */}
            <div className={styles.inputGroup}>
              <div className={styles.labelRow}>
                <label className={styles.label}>Password</label>
                <a href="#" className={styles.forgot}>Forgot password?</a>
              </div>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* REMEMBER ME */}
            <div className={styles.rememberRow}>
              <label className={styles.checkLabel}>
                <input type="checkbox" className={styles.checkbox} />
                Remember me
              </label>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className={styles.btn}
              disabled={loading}
            >
              {loading ? <span className={styles.spinner} /> : 'Sign In'}
            </button>

          </form>

          <p className={styles.register}>
            Don't have an account?{' '}
            <a href="/register" className={styles.registerLink}>Sign up free</a>
          </p>

        </div>
      </div>

    </div>
  );
}