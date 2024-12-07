import React from "react";
import { Github, Linkedin } from "lucide-react";

function ProfileFooter() {
  return (
    <footer style={{ width: "100%", padding: "1.5rem 0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Linkedin style={{ width: "20px", height: "20px", color: "white" }} />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Github style={{ width: "20px", height: "20px", color: "white" }} />
        </a>

        {/* LeetCode Button */}
        <a
          href="https://leetcode.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode Profile"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "20px", height: "20px", color: "white" }}
          >
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            <path d="M15 5l3 3" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default ProfileFooter;
