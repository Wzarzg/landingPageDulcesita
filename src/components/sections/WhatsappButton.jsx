import whats from "../../assets/imgs/WhatsApp_icon.webp";
export default function WhatsappButton() {

  const phoneNumber = "51970754616"; // num dulcesita
 
  const message =
    "Hola, vengo de su sitio web y quisiera más información sobre sus productos.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
        <span className="absolute inset-2.5 rounded-full bg-green-400 animate-ping opacity-75 "></span>
        <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
            relative
            z-50
            w-15
            h-15
            rounded-full
            bg-green-500
            shadow-2xl
            flex
            items-center
            justify-center
            hover:scale-110
            transition
            duration-300
        "
        >
        <img
            src={whats}
            alt="WhatsApp"
            className="
            w-10
            h-10
            "
        />
        </a>
    </div>
  );
}