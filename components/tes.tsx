  const [showPreloader, setShowPreloader] = useState(false);
  const [preloadDone, setPreloadDone] = useState(false);

  useEffect(() => {
    const handleReady = () => setShowPreloader(true);
    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showPreloader && !preloadDone && (
          <Preload onStart={() => setPreloadDone(true)} />
        )}
      </AnimatePresence>

    {preloadDone && (
      <main data-scroll-container className="relative">
        <Nav/>
        <Hero/>
        <About/>
        <Project/>
        <Contact/>
      </main>
    )}
    </>
  );
}