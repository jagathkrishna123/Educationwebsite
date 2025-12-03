const EnrollBadge = () => {
  return (
    <div className="absolute top-2 left-2 z-10">
      <div className="relative inline-block rounded-lg p-[2px] button-glow hover:scale-105 transition duration-300 active:scale-100">
        <span className="block bg-cyan-800 text-white text-sm md:text-base font-hind rounded-lg px-3 py-1">
          Enroll now
        </span>
      </div>
    </div>
  );
};

export default EnrollBadge;
