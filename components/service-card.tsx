import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

type ServiceCardProps = {
    index: number;
    title: string;
    icon: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
    <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
        className="xs:w-[250px] w-full"
    >
        <motion.div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div className="bg-gray-100 dark:bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-gray-200 ">
                <img
                    src={icon}
                    alt="web-development"
                    className="w-16 h-16 object-contain"
                />

                <h3 className="dark:text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

export default ServiceCard;
