$(document).ready(function() {
    // Initialize parallax and other setups...

    function updateCountdown() {
        const countdownElement = $('#countdown');
        const targetDate = new Date('January 1, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const isMobile = window.innerWidth <= 768; // Adjust the width threshold as needed
        if (isMobile) {
            // countdownElement.html(`${days}d ${hours}h<span class="blink-dot">.</span>`);
            countdownElement.html(`Inviting Devs Worldwide`);

        } else {
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            countdownElement.html(`Inviting Devs Worldwide<span class="blink-dot">.</span>`);

            // countdownElement.html(`${days}d ${hours}h ${minutes}m<span class="blink-dot">.</span>`);
        }

        if (distance < 0) {
            clearInterval(updateInterval);
            countdownElement.html("EXPIRED");
        }
    }
    
    // Update the countdown every hour since seconds are not displayed
    const updateInterval = setInterval(updateCountdown, 3600000); // 3600000 milliseconds in an hour
    updateCountdown(); // Also call it immediately to initialize
});

var words = [
    "Artificial Intelligence.",
    "Machine Learning.",
    "Deep Learning.",
    "Natural Language Processing.",
    "Blockchain.",
    "Data Science.",
    "Big Data.",
    "Cloud Computing.",
    "Cybersecurity.",
    "Quantum Computing.",
    "Augmented Reality.",
    "Virtual Reality.",
    "Internet of Things.",
    "Edge Computing.",
    "Software Engineering.",
    "API Development.",
    "Web Development.",
    "Mobile Development.",
    "Game Development.",
    "DevOps.",
    "Continuous Integration.",
    "Continuous Deployment.",
    "Agile Methodology.",
    "Scrum Framework.",
    "Project Management.",
    "Git.",
    "Version Control.",
    "Open Source.",
    "Collaboration.",
    "Remote Work.",
    "Cryptocurrency.",
    "Smart Contracts.",
    "Ethereum.",
    "Solidity.",
    "Distributed Ledger Technology.",
    "Privacy.",
    "Data Protection.",
    "Ethical Hacking.",
    "Penetration Testing.",
    "Robotics.",
    "Automation.",
    "Neural Networks.",
    "Computer Vision.",
    "Speech Recognition.",
    "Language Translation.",
    "Sentiment Analysis.",
    "Predictive Analytics.",
    "Generative Adversarial Networks.",
    "Reinforcement Learning.",
    "Real-Time Transcription",
    "Text-to-Speech",
    "Audio Intelligence",
    "Sentiment Analysis",
    "Conversational AI",
    "Medical Transcription",
    "Speech API",
    "Voice AI",
    "Language Models",
    "Speech Analytics",
    "AI Transcription",
    "Customer AI Support",
    "Audio Summarization",
    "Performance AI",
    "Speech Processing",
    "Media Transcription",
    "Audio Infrastructure",
    "Voice Insights",
    "Business Intelligence",
    "Support Solutions",
    "LLM Integration",
    "Creativity GANs",
    "Predictive GBMs",
    "Augmented NLP",
    "Thought AI",
    "Multimodal AI",
    "NLU Context",
    "Transformer Models",
    "Real-Time Speech",
    "Emotional Text-to-Speech",
    "AI Tokenization",
    "Image Recognition",
    "AI Model Development",
    "Sentiment Mining",
    "Predictive Neural",
    "Data Privacy AI",
    "Intelligent Automation",
    "Edge AI",
    "Quantum Analysis",
    "Blockchain Security",
    "Real-time Speech Transcription",
    "Human-like Text-to-Speech Generation",
    "Advanced Audio Intelligence Models",
    "Sentiment, Intent, and Topic Audio Analysis",
    "Enterprise-level Conversational AI",
    "Medical and Media Content Transcription",
    "Multilingual Speech Recognition API",
    "Cost-effective Voice AI Integration",
    "High-Throughput Voice Synthesis",
    "Custom Speech-to-Text Solutions",
    "AI-driven Speech Analytics",
    "Secure Contact Center Automation",
    "Audio Data Summarization",
    "Performance-Optimized Language Models",
    "Latency-Optimized Speech Processing",
    "AI-Powered Media Transcription Services",
    "Scalable Audio Understanding Infrastructure",
    "Voice Data Insight Extraction",
    "Conversational Intelligence for Business",
    "AI-enhanced Customer Support Solutions",
];

  
  var element = document.getElementById("ai-wordcloud");
  var i = 0;
  var wordIndex = 0;
  var isAdding = true;
  var text = '';
  
  function type() {
    if (isAdding) {
      if (i < words[wordIndex].length) {
        text += words[wordIndex].charAt(i);
        i++;
        setTimeout(type, 60);
      } else {
        isAdding = false;
        setTimeout(type, 2000); // Wait a bit at the end of the word
      }
    } else {
      if (i > 0) {
        text = text.substring(0, text.length - 1);
        i--;
        setTimeout(type, 60);
      } else {
        isAdding = true;
        wordIndex = Math.floor(Math.random() * words.length); // Randomly select an index from the array
        setTimeout(type, 200); // Slight delay before starting next word
      }
    }
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;
  }
  
  type(); // Start the typing effect
  