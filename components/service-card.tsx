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
            <div className="flex flex-col justify-evenly items-center xs:justify-start xs:items-center xs:flex-row bg-gray-100 dark:bg-darkPrimary rounded-[20px] py-5 px-12 hover:bg-gray-200 lg:min-h-[250px]">
                <img
                    src={icon}
                    alt={title}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                />

                <h3 className="dark:text-white text-lg sm:text-[20px] font-bold text-center mt-2 sm:mt-0 sm:ml-4">
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

export default ServiceCard;
