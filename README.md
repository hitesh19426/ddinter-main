## DDInter - Drug Drug Interaction Website

### Description

This Next.js project website is designed to help users find the interaction between drugs by providing information about the medications they are taking. You can find the website link in About section of the github repo or just click [here](https://ddinter-main.vercel.app/). In order to fill the DB, I used python version of mongoDB client from which I read the data csvs, made dataframes and then uploaded the entries to mongoDB.

### Getting Started

To get started, clone the project repository and run `npm install` in the root directory to install all dependencies. Then run `npm run dev` to start the development server. The website will be available at `http://localhost:3000.`

### Technology Used
- Nextjs
- Bootstrap 5
- MongoDB
- Formik
- Python

### Usage
To use the Drug Interaction Checker, simply add the name of the medications you are taking using the input field and click "Check Interactions". The website will then display a list of potential drug interactions, along with information about the severity of the interaction.

### Data Sources
- [DDInter](http://ddinter.scbdd.com/) database.

### Contributing
If you would like to contribute to this project, please feel free to fork the repository and submit a pull request with your changes. I welcome contributions from anyone who is interested in improving the website.

### License
This project is licensed under the MIT License. Feel free to use it however you like.

### Note
The results of interactions are based on the current knowledge and some interactions that do exist may have not been identified. Information provided here is for reference and researches only, not any medical advice.

### Example to view all interactions:
- Aluminum hydroxide
- Dolutegravir
- Aprepitant
- Abacavir
- Orlistat
- Dexamethasone