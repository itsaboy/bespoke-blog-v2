import loadingIcon from "../assets/icons/loadingIcon.svg";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 z-50 flex justify-center items-center">
      <img className="h-24 w-24" src={loadingIcon} />
    </div>
  );
}
