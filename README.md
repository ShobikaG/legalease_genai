# LegalEase AI - Contract Analysis Platform

A fully functional React + Vite application that uses Google Gemini AI to analyze legal documents and provide plain-language explanations, risk assessments, and interactive Q&A.

## Features

- **Document Upload**: Support for PDF and DOCX files with text extraction
- **AI-Powered Analysis**: Clause-by-clause breakdown with risk assessment
- **Interactive Q&A**: Ask questions about your contract and get AI-powered answers
- **Proof of Understanding**: Generate cryptographic proof with QR codes and JSON certificates
- **Multi-page Navigation**: Home, About, and Team pages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Built with accessibility-first principles

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **AI**: Google Gemini 2.0 Flash API
- **Document Processing**: pdfjs-dist, mammoth
- **QR Codes**: qrcode library
- **Icons**: Lucide React

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory with your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your `.env` file

## Usage

1. **Upload Document**: Navigate to the home page and upload a PDF or DOCX legal document
2. **Review Analysis**: View the AI-generated summary and clause-by-clause analysis with risk assessments
3. **Ask Questions**: Use the Q&A tab to ask specific questions about your document
4. **Generate Proof**: Create a proof of understanding certificate with QR code

## Project Structure

```
src/
├── components/
│   ├── Chat.jsx          # Q&A chat interface
│   ├── ClauseCard.jsx    # Individual clause display
│   ├── Navbar.jsx       # Navigation component
│   ├── Proof.jsx        # Proof of understanding generator
│   ├── Results.jsx      # Analysis results display
│   └── Upload.jsx       # Document upload component
├── pages/
│   ├── About.jsx        # About page
│   ├── Home.jsx         # Main application page
│   └── Team.jsx         # Team information page
├── utils/
│   ├── documentProcessor.js  # PDF/DOCX text extraction
│   └── gemini.js            # Gemini API integration
├── App.tsx              # Main app component
└── main.tsx            # Application entry point
```

## Key Features Explained

### Document Analysis
- Extracts text from PDF and DOCX files
- Sends to Gemini API for clause-by-clause analysis
- Provides risk assessments (Low, Medium, High)
- Offers recommended actions for each clause

### Interactive Q&A
- Context-aware responses based on your document
- Cites relevant clause numbers when possible
- Handles questions outside document scope appropriately

### Proof of Understanding
- Generates SHA-256 hash of document text
- Creates timestamped proof certificate
- Provides QR code for verification
- Allows JSON download for record-keeping

## Security & Privacy

- Documents are processed client-side for text extraction
- Only text content is sent to Gemini API for analysis
- No documents are stored on servers
- API key is used client-side (consider server-side proxy for production)

## License

This project is created for educational and demonstration purposes. Please ensure compliance with Google's API terms of service when using the Gemini API.

## Support

For questions or issues, please refer to the project documentation or contact the development team through the Team page.