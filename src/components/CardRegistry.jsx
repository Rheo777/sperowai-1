import TestResultsCard from './TestResultsCard';
import PhysicalExamCard from './PhysicalExamCard';
// Import all possible card components

export const CardComponents = {
  TestResults: TestResultsCard,
  PhysicalExam: PhysicalExamCard,
  // ... map all card types to their components
};

// Dynamic card renderer
export const DynamicCard = ({ type, data, ...props }) => {
  const CardComponent = CardComponents[type];
  
  if (!CardComponent) {
    console.warn(`No card component found for type: ${type}`);
    return null;
  }

  return <CardComponent data={data} {...props} />;
}; 