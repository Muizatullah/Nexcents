
// import React, { useState } from 'react';
// import styles from "./signup.module.css";

// const SignUp = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//       setError('All fields are required');
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     console.log('Signup:', form);
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h2 className={styles.title}>Create Account</h2>
        
//         {error && <div className={styles.error}>{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className={styles.inputGroup}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className={styles.input}
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               className={styles.input}
//             />
//           </div>

//           <button type="submit" className={styles.button}>
//             Sign-up
//           </button>
//         </form>

//         <p className={styles.footer}>
//           Already have an account? <a href="#" className={styles.link}>Sign in</a>
          
//         </p>
//       </div>
//     </div>
//   );
// };


// export default SignUp;
import React, { useState, useMemo, useRef, useEffect } from "react";
import { FiEye, FiEyeOff, FiCheck, FiX, FiLoader } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";
import styles from "./signup.module.css";

/**
 * Nexcent — Sign Up
 * Matches the existing product identity: green hero panel with leaf
 * mark, bold rounded sans headline, white card with rounded inputs,
 * top nav with Login / Sign-up buttons.
 */

const FEATURES = ["Real-time crop monitoring", "Smart irrigation controls", "Yield forecasting & analytics"];

const initialForm = { name: "", email: "", password: "", confirmPassword: "" };

function getPasswordStrength(pw) {
  if (!pw) return { score: 0, label: "" };
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  score = Math.min(score, 4);
  return { score, label: ["Too weak", "Weak", "Fair", "Good", "Strong"][score] };
}

const STRENGTH_CLASS = ["strength0", "strength1", "strength2", "strength3", "strength4"];

function validateField(field, value, form) {
  switch (field) {
    case "name":
      if (!value.trim()) return "Enter your full name";
      if (value.trim().length < 2) return "Name is too short";
      return "";
    case "email":
      if (!value.trim()) return "Enter your email address";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address";
      return "";
    case "password":
      if (!value) return "Create a password";
      if (value.length < 8) return "Use at least 8 characters";
      return "";
    case "confirmPassword":
      if (!value) return "Confirm your password";
      if (value !== form.password) return "Passwords don't match";
      return "";
    default:
      return "";
  }
}

const SignUp = () => {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  const strength = useMemo(() => getPasswordStrength(form.password), [form.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value, nextForm) }));
    }
    if (name === "password" && touched.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: validateField("confirmPassword", nextForm.confirmPassword, nextForm),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value, form) }));
  };

  const isFieldValid = (name) => touched[name] && !errors[name] && form[name];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = {};
    Object.keys(initialForm).forEach((key) => {
      nextErrors[key] = validateField(key, form[key], form);
    });
    setErrors(nextErrors);
    setTouched({ name: true, email: true, password: true, confirmPassword: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    const missingAgreement = !agreed;
    setAgreedError(missingAgreement ? "You need to accept the terms to continue" : "");

    if (hasErrors || missingAgreement) return;

    setIsSubmitting(true);
    // TODO: replace with your real signup request
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSuccess(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setTouched({});
    setErrors({});
    setAgreed(false);
    setSuccess(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.body}>
        {/* Left — green brand panel */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroLogo}>
              <FaLeaf size={24} className={styles.heroLogoIcon} />
              <span className={styles.heroLogoText}>Nexcent</span>
            </div>

            <h1 className={styles.headline}>
              <span className={styles.headlineDark}>Grow smarter,</span>
              <br />
              <span className={styles.headlineLight}>farm better.</span>
            </h1>

            <p className={styles.heroText}>
              Create your account to access your dashboard, track your farm's
              performance, and manage your tools — all in one place.
            </p>

            <ul className={styles.featureList}>
              {FEATURES.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <span className={styles.featureCheck}>
                    <FiCheck size={13} color="#FFFFFF" />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — form card */}
        <div className={styles.formSection}>
          <div className={styles.card}>
            {success ? (
              <div className={styles.fade}>
                <div className={styles.successIcon}>
                  <FiCheck size={22} color="#2F8A3D" />
                </div>
                <h2 className={styles.title}>You're all set.</h2>
                <p className={styles.subtitle}>
                  We sent a confirmation link to <strong>{form.email}</strong>.
                  Verify your address to start managing your farm on Nexcent.
                </p>
                <button type="button" onClick={resetForm} className={styles.link}>
                  Back to sign up
                </button>
              </div>
            ) : (
              <>
                <h2 className={styles.title}>Create account</h2>
                <p className={styles.subtitle}>Sign up to get started with Nexcent</p>

                <form onSubmit={handleSubmit} noValidate>
                  <Field
                    ref={firstFieldRef}
                    label="Full Name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Farmer"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name ? errors.name : ""}
                    valid={isFieldValid("name")}
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email ? errors.email : ""}
                    valid={isFieldValid("email")}
                  />

                  <Field
                    label="Password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password ? errors.password : ""}
                    valid={isFieldValid("password") && strength.score >= 2}
                    endAdornment={
                      <ToggleVisibility
                        show={showPassword}
                        onClick={() => setShowPassword((s) => !s)}
                        label="password"
                      />
                    }
                  />

                  {form.password && (
                    <div className={styles.strengthWrap}>
                      <div className={styles.strengthBar}>
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`${styles.strengthSegment} ${
                              i < strength.score ? styles[STRENGTH_CLASS[strength.score]] : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className={styles.strengthLabel}>
                        {strength.label}
                        {strength.score < 3 && " — add a number, a symbol, or more length"}
                      </span>
                    </div>
                  )}

                  <Field
                    label="Confirm Password"
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.confirmPassword ? errors.confirmPassword : ""}
                    valid={isFieldValid("confirmPassword")}
                    endAdornment={
                      <ToggleVisibility
                        show={showConfirm}
                        onClick={() => setShowConfirm((s) => !s)}
                        label="password confirmation"
                      />
                    }
                  />

                  <div className={styles.checkboxRow}>
                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          if (e.target.checked) setAgreedError("");
                        }}
                        className={styles.checkbox}
                      />
                      <span>
                        I agree to Nexcent's{" "}
                        <a href="#" className={styles.inlineLink}>
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className={styles.inlineLink}>
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                    {agreedError && <p className={styles.checkboxError}>{agreedError}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                    {isSubmitting ? (
                      <>
                        <FiLoader size={16} className={styles.spinner} />
                        Creating account
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>

                <p className={styles.footerText}>
                  Already have an account?{" "}
                  <a href="#" className={styles.inlineLink}>
                    Login
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = React.forwardRef(({ label, name, error, valid, endAdornment, ...props }, ref) => (
  <div className={styles.field}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <div className={styles.inputWrapper}>
      <input
        ref={ref}
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${styles.input} ${error ? styles.inputError : ""} ${valid ? styles.inputValid : ""}`}
        {...props}
      />
      {endAdornment && <div className={styles.endAdornment}>{endAdornment}</div>}
      {!endAdornment && valid && (
        <div className={styles.endAdornment}>
          <FiCheck size={16} color="#3FA34D" />
        </div>
      )}
    </div>
    {error && (
      <p id={`${name}-error`} className={styles.errorText}>
        <FiX size={12} />
        {error}
      </p>
    )}
  </div>
));
Field.displayName = "Field";

const ToggleVisibility = ({ show, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    tabIndex={-1}
    aria-label={show ? `Hide ${label}` : `Show ${label}`}
    className={styles.toggleBtn}
  >
    {show ? <FiEyeOff size={18} /> : <FiEye size={18} />}
  </button>
);

export default SignUp;