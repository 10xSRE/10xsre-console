"use client";

import { Button, Flex } from "@radix-ui/themes";
import { useState } from "react";
import type { FormEvent } from "react";

import styles from "./full-screen-signup.module.css";

export const FullScreenSignup = () => {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validatePassword = (value: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,16}$/.test(value);
  };

  const switchMode = (nextMode: "signup" | "login") => {
    setIsLoginMode(nextMode === "login");
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;

    if (!isLoginMode) {
      if (!firstName.trim()) {
        setFirstNameError("First name is required.");
        valid = false;
      } else {
        setFirstNameError("");
      }

      if (!lastName.trim()) {
        setLastNameError("Last name is required.");
        valid = false;
      } else {
        setLastNameError("");
      }
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (isLoginMode ? !password.trim() : !validatePassword(password)) {
      setPasswordError(
        isLoginMode
          ? "Password is required."
          : "Use 8-16 chars with uppercase, lowercase, number, and symbol."
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={styles.shell}>
      <div className={styles.card}>
        <div className={styles.topFade} />

        <div className={styles.stripeLayer}>
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
          <div className={styles.stripe} />
        </div>

        <div className={styles.warmMist} />
        <div className={styles.orangeBlob} />
        <div className={styles.whiteBlobA} />
        <div className={styles.whiteBlobB} />

        <div className={styles.leftPanel}>
          <div className={styles.leftContent}>
            <h1 className={styles.leftTitle}>
              <img
                src="/10xSRE_Logo_With_Title_Without_Background_For_Login_Page.svg"
                alt="10xSRE"
                className={styles.leftBrandLogo}
              />
            </h1>
            <p className={styles.leftDescription}>
              An Agentic AI SRE that autonomously investigates production incidents by reasoning over your observability data and identifies root causes in real time, enabling faster incident resolution and continuous system reliability.
            </p>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightContent}>
            <div className={styles.header}>
              <h3 className={styles.heading}>
                <span className={styles.headingLead}>Get Started</span>
              </h3>
              <p className={styles.subHeading}>From Incident To Resolution ➜ 10x faster</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {!isLoginMode && (
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <div className={styles.nameRow}>
                    <div className={styles.nameCell}>
                      <input
                        type="text"
                        id="first-name"
                        placeholder="first name"
                        className={`${styles.input} ${firstNameError ? styles.inputError : ""}`}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        aria-invalid={!!firstNameError}
                        aria-describedby="first-name-error"
                      />
                      {firstNameError && (
                        <p id="first-name-error" className={styles.errorText}>
                          {firstNameError}
                        </p>
                      )}
                    </div>

                    <div className={styles.nameCell}>
                      <input
                        type="text"
                        id="last-name"
                        placeholder="last name"
                        className={`${styles.input} ${lastNameError ? styles.inputError : ""}`}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        aria-invalid={!!lastNameError}
                        aria-describedby="last-name-error"
                      />
                      {lastNameError && (
                        <p id="last-name-error" className={styles.errorText}>
                          {lastNameError}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className={`${styles.input} ${emailError ? styles.inputError : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!emailError}
                  aria-describedby="email-error"
                />
                {emailError && (
                  <p id="email-error" className={styles.errorText}>
                    {emailError}
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder={isLoginMode ? "enter your password" : "minimum 8-16 characters"}
                  className={`${styles.input} ${passwordError ? styles.inputError : ""}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={!!passwordError}
                  aria-describedby="password-error"
                />
                {passwordError && (
                  <p id="password-error" className={styles.errorText}>
                    {passwordError}
                  </p>
                )}
              </div>

              <Flex gap="3" align="center">
                <Button
                  type="submit"
                  variant="classic"
                  color="tomato"
                  radius="large"
                  size="2"
                  className={styles.primaryButton}
                >
                  {isLoginMode ? "Login" : "Create a new account"}
                </Button>
              </Flex>

              <div className={styles.loginRow}>
                {isLoginMode ? "Don't have account? " : "Already have account? "}
                <button
                  type="button"
                  className={styles.loginLinkButton}
                  onClick={() => switchMode(isLoginMode ? "signup" : "login")}
                >
                  {isLoginMode ? "Create account" : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
