import 'dotenv/config'

import OpenAI from 'openai'
const openai = new OpenAI()

// add your key .env file or here:
// const openai = new OpenAI({
//   apiKey: 'Insert your key here',
// })

const result = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    {
      role: 'system',
      content:
        'You are an AI assistant, answer any questions to the best of your ability.',
    },
    {
      role: 'user',
      content: 'Hello!, What is the most efficient way to learn JavaScript?',
    },
  ],
})

console.log(result.choices[0].message.content)
