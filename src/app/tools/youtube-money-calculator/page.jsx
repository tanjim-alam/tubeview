import YtMonetCalculatorPage from './YtMonetCalculatorPage';
export const generateMetadata = () => {
    return {
        title: "YouTube Money Calculator Free Tools | GoFamy",
        description: "The YouTube money calculator is a user-friendly online tool that lets creators know how much money their channel can generate.",
        keywords: "YouTube Money Calculator, YouTube earnings calculator, YouTube income calculator, YouTube earnings estimator",
        alternates: {
            canonical: 'https://www.gofamy.com/tools/youtube-money-calculator',
        }
    }
}
export function page() {
    return (
        <YtMonetCalculatorPage />
    );
}

export default page;