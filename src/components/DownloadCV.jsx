
const DownloadCV = () => {
  return (
    <a
      href="/mon_cv.pdf" // Remplace par le chemin réel de ton CV
      download
      className="fixed right-5 bottom-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
    >
      Télécharger mon CV
    </a>
  );
};

export default DownloadCV;
