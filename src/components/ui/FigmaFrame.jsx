function FigmaFrame({ src, alt, onNext }) {
  return (
    <div className="relative mx-auto w-fit">
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          className="absolute inset-0 z-10"
          aria-label="Go to next screen"
        />
      )}
      <img src={src} alt={alt} className="block h-auto w-full max-w-[860px]" draggable={false} />
    </div>
  )
}

export default FigmaFrame
