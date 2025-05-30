
import ConverterLayout from "../components/ConverterLayout";

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  return (
    <ConverterLayout title={title} description={description}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="text-6xl mb-6">🚧</div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Coming Soon!
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          This converter is currently under development. We're working hard to bring you the best conversion experience.
        </p>
        <div className="bg-blue-50 rounded-lg p-6">
          <p className="text-blue-700 font-medium">
            Want to be notified when it's ready? Check back soon!
          </p>
        </div>
      </div>
    </ConverterLayout>
  );
};

export default ComingSoon;
