const http = require('http');
const app = require('./app');


const normalizePort = val => {
  const newPort = parseInt(val, 10);

  if (isNaN(newPort)) {
    return val;
  }
  if (newPort >= 0) {
    return newPort;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);


// app.route('/api/candidates').get((req, res) => {
//     res.send(
//         [
//             {
//                 'id': '1',
//                 'lastName': 'Merlet',
//                 'firstName': 'Jean',
//                 'sexe': 'Masculin',
//                 'email': 'j.merlet@etechconsulting-mg.com',
//                 'dateOfBirth': '1999-07-10',
//                 'matricule': '555',
//                 'status': 'Célibataire',
//                 'profiles': [
//                     {
//                         'id': 'pro1',
//                         'title': 'Developpeur Senior JAVA'
//                     },
//                     {
//                         'id': 'pro2',
//                         'title': 'Tech Lead JAVA'
//                     }
//                 ]
//             },
//             {
//                 'id': '2',
//                 'lastName': 'Obispo',
//                 'firstName': 'Ruth',
//                 'sexe': 'Féminin',
//                 'email': 'r.obispo@etechconsulting-mg.com',
//                 'dateOfBirth': '1995-07-30',
//                 'matricule': '1099',
//                 'status': 'Marié(e)',
//                 'profiles': [
//                     {
//                         'id': 'pro2',
//                         'title': 'Developpeur Junior ASP.NET'
//                     },
//                     {
//                         'id': 'pro2',
//                         'title': 'Developpeur Junior NodeJS'
//                     }
//                 ]
//             }
//         ]
//     );
// });

// app.route('/api/candidates/:id').get((req, res) => {
//     const id = req.params['id'];
//     let response = '';
//     if (id === '2') response = {
//         'id': '2',
//         'lastName': 'Obispo',
//         'firstName': 'Ruth',
//         'sexe': 'Féminin',
//         'email': 'r.obispo@etechconsulting-mg.com',
//         'dateOfBirth': '1999-07-10',
//         'matricule': '1099',
//         'status': 'Marié(e)',
//         'profiles': [
//             {
//                 'id': 'pro2',
//                 'title': 'Developpeur Junior ASP.NET'
//             },
//             {
//                 'id': 'pro2',
//                 'title': 'Developpeur Junior NodeJS'
//             }
//         ]
//     };
//     if (id === '1') response = {
//         'id': '1',
//         'lastName': 'Merlet',
//         'firstName': 'Jean',
//         'sexe': 'Masculin',
//         'email': 'j.merlet@etechconsulting-mg.com',
//         'dateOfBirth': '1995-07-30',
//         'matricule': '555',
//         'status': 'Célibataire',
//         'profiles': [
//             {
//                 'id': 'pro1',
//                 'title': 'Developpeur Senior JAVA'
//             },
//             {
//                 'id': 'pro2',
//                 'title': 'Tech Lead JAVA'
//             }
//         ]
//     };
//     res.json(response);
// });

// app.route('/api/profile/candidate/:idCandidate').get((req, res) => {
//     const id = req.params['idCandidate'];
//     let response = '';
//     if (id === '2') response = {
//         'id': '2',
//         'title': 'Développeur Full Stack PHP Symfony / React',
//         'idCandidat': '2',
//         'experiences': [
//             {
//                 'id': '1',
//                 'position': 'Dev Back PHP',
//                 'sector': 'commerce',
//                 'beginDate': '2020-12-12',
//                 'endDate': '2021-09-23',
//                 'isCurrentPosition': false,
//                 'experienceTitle': 'Site e-commerce sport',
//                 'description': ''
//             },
//             {
//                 'id': '2',
//                 'position': 'Dev Front React',
//                 'sector': 'reseaux sociaux',
//                 'beginDate': '2021-12-12',
//                 'endDate': '',
//                 'isCurrentPosition': true,
//                 'experienceTitle': 'Application de messagerie',
//                 'description': ''
//             }
//         ],
//         'skills': [
//             {
//                 'id': '1',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'PHP'
//                 }
//             },
//             {
//                 'id': '2',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'JavaScript'
//                 }
//             },
//             {
//                 'id': '3',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '4',
//                     'name': 'React'
//                 }
//             },
//             {
//                 'id': '4',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '5',
//                     'name': 'Symfony'
//                 }
//             }
//         ]
//     };
//     if (id === '1') response = {
//         'id': '1',
//         'title': 'Développeur Senior NodeJS',
//         'idCandidat': '1',
//         'experiences': [
//             {
//                 'id': '1',
//                 'position': 'Dev Back NodeJS',
//                 'sector': 'banque',
//                 'beginDate': '2020-12-12',
//                 'endDate': '',
//                 'isCurrentPosition': true,
//                 'experienceTitle': 'Application de gestion de compte en ligne',
//                 'description': ''
//             },
//             {
//                 'id': '2',
//                 'position': 'Dev Fullstack Javascript',
//                 'sector': 'reseaux sociaux',
//                 'beginDate': '2019-12-12',
//                 'endDate': '2020-12-11',
//                 'isCurrentPosition': false,
//                 'experienceTitle': 'Application de messagerie',
//                 'description': ''
//             }
//         ],
//         'skills': [
//             {
//                 'id': '1',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'NodeJS'
//                 }
//             },
//             {
//                 'id': '2',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'JavaScript'
//                 }
//             },
//             {
//                 'id': '3',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '4',
//                     'name': 'React'
//                 }
//             },
//             {
//                 'id': '4',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '5',
//                     'name': 'Bootstrap'
//                 }
//             }
//         ]
//     };
//     res.json(response);
// });

// app.route('/api/experiences/candidate/:idCandidate').get((req, res) => {
//     const id = req.params['idCandidate'];
//     let response = '';
//     if (id === '2') response = {
//         'idCandidat': '2',
//         'experiences': [
//             {
//                 'id': '1',
//                 'position': 'Dev Back PHP',
//                 'sector': 'commerce',
//                 'beginDate': '2020-12-12',
//                 'endDate': '2021-09-23',
//                 'isCurrentPosition': false,
//                 'experienceTitle': 'Site e-commerce sport',
//                 'description': ''
//             },
//             {
//                 'id': '2',
//                 'position': 'Dev Front React',
//                 'sector': 'reseaux sociaux',
//                 'beginDate': '2021-12-12',
//                 'endDate': '',
//                 'isCurrentPosition': true,
//                 'experienceTitle': 'Application de messagerie',
//                 'description': ''
//             }
//         ]
//     };
//     if (id === '1') response = {
//         'idCandidat': '1',
//         'experiences': [
//             {
//                 'id': '1',
//                 'position': 'Dev Back NodeJS',
//                 'sector': 'banque',
//                 'beginDate': '2020-12-12',
//                 'endDate': '',
//                 'isCurrentPosition': true,
//                 'experienceTitle': 'Application de gestion de compte en ligne',
//                 'description': ''
//             },
//             {
//                 'id': '2',
//                 'position': 'Dev Fullstack Javascript',
//                 'sector': 'reseaux sociaux',
//                 'beginDate': '2019-12-12',
//                 'endDate': '2020-12-11',
//                 'isCurrentPosition': false,
//                 'experienceTitle': 'Application de messagerie',
//                 'description': ''
//             }
//         ]
//     };
//     res.json(response);
// });

// app.route('/api/skills/candidate/:idCandidate').get((req, res) => {
//     const id = req.params['idCandidate'];
//     let response = '';
//     if (id === '2') response = {
//         'idCandidat': '2',
//         'skills': [
//             {
//                 'id': '1',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'NodeJS'
//                 }
//             },
//             {
//                 'id': '2',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'JavaScript'
//                 }
//             },
//             {
//                 'id': '3',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '4',
//                     'name': 'React'
//                 }
//             },
//             {
//                 'id': '4',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '5',
//                     'name': 'Bootstrap'
//                 }
//             }
//         ]
//     };
//     if (id === '1') response = {
//         'idCandidat': '1',
//         'skills': [
//             {
//                 'id': '1',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'PHP'
//                 }
//             },
//             {
//                 'id': '2',
//                 'category': {
//                     'id': '1',
//                     'name': 'Programmation'
//                 },
//                 'technology': {
//                     'id': '3',
//                     'name': 'JavaScript'
//                 }
//             },
//             {
//                 'id': '3',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '4',
//                     'name': 'React'
//                 }
//             },
//             {
//                 'id': '4',
//                 'category': {
//                     'id': '2',
//                     'name': 'Framework & Libraries'
//                 },
//                 'technology': {
//                     'id': '5',
//                     'name': 'Symfony'
//                 }
//             }
//         ]
//     };
//     res.json(response);
// });