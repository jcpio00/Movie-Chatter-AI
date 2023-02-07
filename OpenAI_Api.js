async function generateResponse() {
    // Replace the string with your OpenAI API key
    const apiKey = "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";

    // Define the model and prompt to use
    const model = "text-davinci-002";
    const prompt =  document.getElementById("prompt");

    // Generate a response using the OpenAI API
    const response = await openai.prompt(apiKey, model, prompt);

    // Extract the response text
    const message = response.choices[0].text;

    // Update the HTML element with the response text
    document.getElementById("response").innerHTML = message;
  }