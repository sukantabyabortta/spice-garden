import butterChicken from "../../assets/images/butter-chicken.jpg";
import biryani from "../../assets/images/biryani.jpg";
import tandooriPlatter from "../../assets/images/tandoori-platter.jpg";
import thali from "../../assets/images/thali.jpg";
import diningArea from "../../assets/images/dining-area.jpg";
import tandoorKitchen from "../../assets/images/tandoor-kitchen.jpg";

const galleryData = {
       hTxt : "Food & Ambiance Gallery",
       para : "Take a visual journey through our authentic Indian dishes and  traditional decor",

      content: [
            {
            img: butterChicken,
            title: "Butter Chicken",
            tag: "Signature Dish",
            description: "Creamy tomato-based curry"
            },
            {
            img: biryani,
            title: "Hyderabadi Biryani",
            tag: "Chef's Special",
            description: "Aromatic basmati rice with spices"
            },
            {
            img: tandooriPlatter,
            title: "Tandoori Platter",
            tag: "Grilled Specialties",
            description: "Fresh from our clay oven"
            },
            {
            img: thali,
            title: "Royal Thali",
            tag: "Complete Meal",
            description: "Traditional Indian platter"
            },
            {
            img: diningArea,
            title: "Traditional Dining",
            tag: "Elegant Ambiance",
            description: "Authentic Indian decor"
            },
            {
            img: tandoorKitchen,
            title: "Live Tandoor Kitchen",
            tag: "Open Kitchen",
            description: "Watch our chefs in action"
            }
       ],
};

export default galleryData;
