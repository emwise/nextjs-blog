// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
//this is good to use for handling client-side input like in the case of a form with a POST on submit.
