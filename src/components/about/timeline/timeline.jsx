import { FaRegCalendar } from "react-icons/fa6";
import { IoIosCodeWorking } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";

export const TimelineItem = ({ item }) => {
    const isWork = item.type === 'work';
    
    const getIcon = (type) => {
        switch (type) {
            case 'work':
                return <IoIosCodeWorking className="text-xl" />;
            case 'study':
                return <FaBookOpen className="text-xl" />;
            case 'other':
            default:
                return <FaRegCalendar className="text-xl" />;
        }
    };
    const formatDate = (dateString) => {
        if (!dateString) return 'Presente';
        const dateParts = dateString.split('-');
        const date = new Date(dateParts[0], parseInt(dateParts[1]) - 1);  
        
        const options = { year: 'numeric', month: 'long' };
        const formattedDate = date.toLocaleDateString('pt-BR', options);
        return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    }

    return (
        <div className={`relative w-full md:w-1/2 ${isWork ? 'md:ml-auto md:pl-12' : 'md:pr-12'}`}>
            
            <div className={`absolute top-0 flex items-center justify-center 
                left-3 
                ${isWork ? 'md:left-0 md:-translate-x-1/2 md:right-auto' : 'md:right-0 md:translate-x-1/2 md:left-auto'}
            `}>
                 <div className="bg-slate-900 border-2 border-slate-600 group-hover:border-sky-500 group-hover:text-sky-500 text-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 z-10">
                    {getIcon(item.type)}
                </div>
            </div>
            
            <div className={`bg-slate-900/50 p-6 rounded-lg border border-slate-800 hover:border-slate-600 transition-colors duration-300 group ml-12 md:ml-0 ${!isWork ? 'md:text-right' : ''}`}>
                <span className={`text-sm font-mono text-sky-400 mb-1 block ${!isWork ? 'md:flex md:justify-end' : ''}`}>
                    {formatDate(item.startDate)} — {item.endDate ? formatDate(item.endDate) : <span className="text-green-400 ml-1">Presente</span>}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{item.title}</h3>
                <h4 className="text-md text-gray-400 font-medium mb-3">{item.institution}</h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.description}</p>
            </div>
        </div>
    );
}    