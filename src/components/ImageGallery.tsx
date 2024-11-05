const ImageGallery = () => {
  return (
    <div className="grid-cols-3 justify-center gap-4 mt-10">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Design 1</h2>
          {/* <p>Uploaded on:</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Vote</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery