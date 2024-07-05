import "../styles/missing.scss"
import Robot from "../assets/svg/Robot";

const Missing = () => {
  return (
    <section className="Missing">
      <div className="Missing__text">
        <h4 className="Missing__title">Oops!</h4>
        <p className="Missing__404">404</p>
      </div>
      <div className="Missing__svg">
        <Robot />
      </div>
    </section>
  )
}

export default Missing;
