before(() => {
  cy.exec("tailwindcss -i apps/component-lab/src/tailwind.css -m").then(
    ({ stdout }) => {
      if (!document.head.querySelector("#tailwind-style")) {
        const link = document.createElement("style");
        link.id = "tailwind-style";
        link.innerHTML = stdout;

        document.head.appendChild(link);
      }
    }
  );
});
