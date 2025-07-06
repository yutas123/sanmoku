import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "山田",
    email: "yamada@gmail.com",
    comment: "ぼくは山田です"
  });

  function handleChange(e) {  
    var name = e.target.name;
    var value = e.target.value;
    setFormData(function(prevData) {
      return Object.assign({}, prevData, { [name]: value });
    });
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("送信されたデータ:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        名前：
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        メール：
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        コメント：
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </label>

      <button type="submit">送信</button>
    </form>
  );
}

export default ContactForm;