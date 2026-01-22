export function getResetPasswordEmailHtml(resetLink: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #09090b;
      margin: 0;
      padding: 0;
      color: #e2e8f0;
    }
    .container {
      max-width: 500px;
      margin: 40px auto;
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      backdrop-filter: blur(16px);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    .logo {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 24px;
      color: #ffffff;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
      display: inline-block;
      letter-spacing: 0.5px;
    }
    h1 {
      font-size: 20px;
      margin-bottom: 16px;
      font-weight: 600;
      color: #ffffff;
    }
    p {
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 24px;
      color: #94a3b8;
    }
    .btn {
      display: inline-block;
      padding: 14px 32px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      text-decoration: none;
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      transition: all 0.2s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    .btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 4px 20px rgba(255, 255, 255, 0.15);
    }
    .footer {
      margin-top: 32px;
      font-size: 12px;
      color: #64748b;
    }
    .link-text {
        font-size: 12px;
        color: #64748b;
        word-break: break-all;
        margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">FaceSwapper.ai</div>
    <h1>Reset Your Password</h1>
    <p>We received a request to reset your password. No worries! You can reset it by clicking the button below.</p>
    <a href="${resetLink}" class="btn">Reset Password</a>
    <p class="footer">If you didn't request a password reset, you can safely ignore this email.</p>
    <div class="link-text">
        <p>Or copy and paste this link into your browser:</p>
        <a href="${resetLink}" style="color: #94a3b8;">${resetLink}</a>
    </div>
  </div>
</body>
</html>
  `;
}
