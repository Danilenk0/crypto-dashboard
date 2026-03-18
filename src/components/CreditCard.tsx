import CreditCardBg from "../assets/CreditCardBg.png";
import creditCardChip from "../assets/creditCardChip.png";

const CreditCard = () => {
  return (
    <div className="relative w-95 h-55 rounded-2xl overflow-hidden bg-base-blue text-white p-6">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={CreditCardBg}
        alt="credit card background"
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start">
          <p className="text-lg font-semibold">Crypto Bank</p>
          <p>VISA</p>
        </div>
        <div>
          <img className="w-12" src={creditCardChip} alt="card chip" />
        </div>

        <div className="flex gap-4 text-lg tracking-widest font-medium">
          <p>3475</p>
          <p>7381</p>
          <p>3759</p>
          <p>4512</p>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-70">Card Holder</p>
            <p className="font-semibold">Mihail Danilenko</p>
          </div>

          <div>
            <p className="text-xs opacity-70">Expires</p>
            <p className="font-semibold">12/28</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
