export default function getButtonContent(
  formStatus,
  loading,
  sendBtn,
  sendBtnSuccess,
  sendBtnError,
  Loader
) {
  if (formStatus === "success") {
    return <>{sendBtnSuccess}</>;
  }

  if (loading) {
    return <Loader />;
  }

  if (formStatus === "error") {
    return <>{sendBtnError}</>;
  }

  return sendBtn;
}
