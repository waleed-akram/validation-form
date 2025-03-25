import './responsive-styling.css'

export default function Page() {
  return (
    <div className='page-container'>
      <h1>Responsive CSS</h1>
      <h2>Resize the browser window to see the effect.</h2>
      <div className="responsive">
        <div className="responsive-col1">
          <p>Done</p>
        </div>
        <div className="responsive-col2">
          <p>With</p>
        </div>
        <div className="responsive-col3">
          <p>Help</p>
        </div>
        <div className="responsive-col4">
          <p>Of</p>
        </div>
        <div className="responsive-col5">
          <p>@keyframes</p>
        </div>
      </div>
    </div>
  );
} 
