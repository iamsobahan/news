import './Shorboshesh.css';
import { useNavigate } from 'react-router-dom';

const Shorboshesh = (props) => {
  const Navigate = useNavigate();

  const clickHandler = () => {
    Navigate(`/details/${props.shorbosheshData[0].slug}`);
  };
  return (
    <div className="shorboshesh">
      <div className="container">
        <div className="shorboshesh__title text-center py-4">
          <h1
            className="shorboshesh__title__paragraph"
            style={{ fontWeight: '900' }}
          >
            সর্বশেষ সংবাদ
          </h1>
        </div>
        <div className="row pt-4">
          <div className="col-lg-1">
            <div className="text-center text-area">
              <p className="text-danger fw-bold">রাজনীতি</p>
              <small style={{ fontSize: '12px', fontWeight: '600' }}>
                ১০ মিনিট আগ
              </small>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              onClick={clickHandler}
              className="img-fluid"
              src={`https://api.bestaid.com.bd/${props.shorbosheshData[0].image}`}
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <h1 className="pb-5 mt-4 text-heading">
                {props.shorbosheshData[0].title}
              </h1>
              <h3 className="pt-5 sub-heading">
                {props.shorbosheshData[0].sub_title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorboshesh;
