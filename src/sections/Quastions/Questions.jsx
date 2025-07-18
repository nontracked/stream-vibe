import Title from "@/components/Title"
import "./questions.scss"
import Button from "@/components/Button"
import AccordionGroup from "@/components/AccordionGroup"
import Accordion from "@/components/Accordion"

export const Questions = () => {
  const questionsItem = [
    "What is StreamVibe",
    "How do I sign up for StreamVibe",
    "What is the StreamVibe free trial",
    "How much does StreamVibe cost",
    "How do I contact StreamVibe customer support",
    "What content is available on StreamVibe",
    "What are the StreamVibe payment methods",
    "How can I watch StreamVibe",
  ]
  return (
    <section className="questions section container">
      <div className="questions__header">
        <Title
          title="Frequently Asked Questions"
          desc="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          action={(
            <Button label="Ask a Question" href="/support" />
          )}
        />
      </div>
      <div className="questions__body">
        <AccordionGroup columns={2} >
          {questionsItem.map((question, index) => (
            <Accordion
              title={question}
              key={index}
              id={`questions-${index}`}
              name="questions"
              isOpen={index === 0}
            >
              <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
            </Accordion>
          ))}
        </AccordionGroup>
      </div>
    </section>
  )
}