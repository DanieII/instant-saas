export default function FAQ() {
  return (
    <div className="container mx-auto px-8 py-20" id="faq">
      <div className="flex flex-col items-center space-y-12">
        <h2 className="text-center text-4xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="join join-vertical bg-base-100 max-w-xl">
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates et assumenda ut nesciunt distinctio laboriosam dolorum,
              facilis eius perspiciatis recusandae, accusantium qui eligendi
              quasi laudantium harum? Quibusdam expedita asperiores illo.
            </div>
          </div>
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius,
              maxime amet dolor deleniti animi libero totam obcaecati, eum quae
              minus earum, pariatur distinctio vel. Ducimus non expedita quidem
              facere?
            </div>
          </div>
          <div className="collapse-arrow join-item border-base-300 collapse border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              pariatur iure adipisci, nisi asperiores sed velit nostrum incidunt
              voluptatibus molestias numquam suscipit? Molestiae error iusto
              placeat repellat vitae. Aperiam, delectus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
