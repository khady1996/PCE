import React from 'react';
import {StyleSheet, View, TextInput, Button , FlatList, Text } from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

//import monuments from '../Helpers/monumentsData'
import MonumentItem from './MonumentItem'

class Accueil extends React.Component {
	
	render() {
		
		
		
        return (
			  
			<View>
			  <TextInput style={styles.textinput} placeholder = 'Monuments'/>
				
				<FlatList
				  data={[{
      id:181808,
      vote_average:7.2,
      title:"Tour EIFFEL",
      poster_path:"",
      original_title:"",
      overview:" La tour Eiffel est une structure en fer puddlé, un fer qui a perdu une part de son carbone et donc rouille moins vite. Elle est de forme pyramidale aux côtés légèrement incurvés. Elle mesure 324m de haut et se divise en 4 parties séparées par un étage. Jusqu'au deuxième étage la tour est faite de 4 piliers distincts, mais à partir de là ils se joignent en un unique pylone qui s'élève verticalement jusqu'au sommet. Les étages sont successivement aux altitudes de 57m, 115m et 276m. Il existe un étage intermédiaire, entre le deuxième et le troisième, mais il est inutilisé de nos jours. Il servait, au XIXe et début XXe siècle, de plate-forme de transbordement pour les passagers allant au sommet car les ascenseurs n'étaient pas capables de s'élever si haut en une seule fois.La tour est décorée d'arcades, au niveau du premier étage, et chaque étage possède différents bâtiments : Restaurants, boutiques, musées, galeries d'observation, et même, l'hiver, une patinoire. Les ascenseurs facilitent la montée des visiteurs mais il est possible de monter la tour par l'escalier jusqu'au 2e étage.",
      release_date:"2017-12-13"
   },
   {
      id:181808,
      vote_average:7.2,
      title:"Cathédrale Notre-Dame de Paris",
      poster_path:"",
      original_title:"",
      overview:" La cathédrale Notre-Dame de Paris, communément appelée Notre-Dame, est la cathédrale de l'archidiocèse de Paris, située sur l'île de la Cité. Dédiée à la Vierge Marie, elle est pendant de nombreux siècles l'une des cathédrales les plus grandes d'Occident. Longtemps la plus haute construction de la ville, elle est l'un des monuments les plus emblématiques de Paris.\nÉdifice à la fois religieux et patrimonial, elle est liée à de nombreux épisodes de l’histoire de France. Église paroissiale royale au Moyen Âge, elle accueille l’arrivée de la Sainte Couronne en 1239, puis le sacre de Napoléon Ier en 1804, le baptême du duc de Bordeaux en 1821, ainsi que les funérailles de plusieurs présidents de la République française (Adolphe Thiers, Sadi Carnot, Paul Doumer, Charles de Gaulle, Georges Pompidou, François Mitterrand). C'est aussi sous ses voûtes qu'est chanté un Magnificat lors de la libération de Paris, en 1944. Le 850e anniversaire de sa construction est célébré en 2013.",
      release_date:"2017-12-13"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Musée du LOUVRE",
      poster_path:"",
      original_title:"Star Wars",
      overview:"Le Louvre possède une longue histoire de conservation artistique et historique, depuis l'Ancien Régime jusqu'à nos jours. À la suite du départ de Louis XIV pour le château de Versailles à la fin du xviie siècle, on y entrepose une partie des collections royales de tableaux et de sculptures antiques. Après avoir durant un siècle hébergé plusieurs académies dont celle de peinture et de sculpture, ainsi que divers artistes logés par le roi, l'ancien palais royal est véritablement transformé sous la Révolution en « Muséum central des arts de la République ». Il ouvre en 1793 en exposant environ 660 œuvres, essentiellement issues des collections royales ou confisquées chez des nobles émigrés ou dans des églises. Par la suite les collections ne cesseront de s'enrichir par des prises de guerre, acquisitions, mécénats, legs, donations, et découvertes archéologiques.",
      release_date:"1977-05-25"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Arc de triomphe de l'Étoile",
      poster_path:"",
      original_title:"",
      overview:"L'Arc de triomphe s'élève au centre de la place Charles-de-Gaulle (anciennement place de l’Étoile) dans les 8e, 16e, et 17e arrondissements de Paris1. Il est situé dans l'axe et à l’extrémité ouest de l’avenue des Champs-Élysées, à 2,2 kilomètres de la place de la Concorde. Haut de 49,54 m, large de 44,82 m et profond de 22,21 m, il est géré par le Centre des monuments nationaux2. La hauteur de la grande voûte est de 29,19 m et sa largeur de 14,62 m. La petite voûte mesure 18,68 m de haut et 8,44 m de large.\nLa place de l'Étoile forme un énorme rond-point de douze avenues percées au xixe siècle sous l’impulsion du baron Haussmann, alors préfet du département de la Seine. Ces avenues « rayonnent » en étoile autour de la place, notamment l’avenue Kléber, l'avenue de la Grande-Armée, l’avenue de Wagram et, la plus connue, l’avenue des Champs-Élysées. Des pavés de couleurs différentes dessinent sur le sol de la place deux étoiles dont les pointes arrivent pour l'une au milieu des avenues, pour l'autre entre les avenues.",
      release_date:"1977-05-25"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Basilique du Sacré-Cœur de Montmartre",
      poster_path:"",
      original_title:"",
      overview:"La basilique du Sacré-Cœur de Montmartre, dite du Vœu national, située au sommet de la butte Montmartre, dans le quartier de Clignancourt du 18e arrondissement de Paris, est un édifice religieux parisien majeur, « sanctuaire de l'adoration eucharistique et de la miséricorde divine » et propriété de l'archidiocèse de Paris. \nLa construction de cette église, monument à la fois politique et culturel, suit l'après-guerre de 1870. Elle est déclarée d'utilité publique par une loi votée le 24 juillet 1873 par l'Assemblée nationale de 1871 ; sa construction est achevée en 1914. Elle s'inscrit dans le contexte de recharge sacrale et dans le cadre d'un nouvel « ordre moral » faisant suite aux événements de la Commune de Paris, dont Montmartre fut un des hauts lieux. Sa situation à 130 m d'altitude près de l'un des points culminants de Paris, et son dôme qui s'élève à 83 mètres, la rendent visible de très loin. Avec près de onze millions de pèlerins et visiteurs par an, c'est le deuxième monument religieux parisien le plus visité après la cathédrale Notre-Dame de Paris.",
      release_date:"1977-05-25"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Musée d’Orsay",
      poster_path:"",
      original_title:"",
      overview:"Le musée d’Orsay est un musée national inauguré en 1986, situé dans le 7e arrondissement de Paris le long de la rive gauche de la Seine. Il est installé dans l’ancienne gare d'Orsay, construite par Victor Laloux de 1898 à 1900 et réaménagée en musée sur décision du Président de la République Valéry Giscard d'Estaing. Ses collections présentent l’art occidental de 1848 à 1914, dans toute sa diversité : peinture, sculpture, arts décoratifs, art graphique, photographie, architecture, etc. Il est l’un des plus grands musées d’Europe.\nLe musée possède la plus importante collection de peintures impressionnistes et postimpressionnistes au monde, avec près de 1 100 toiles4 au total sur plus de 3 480, et l’on peut y voir des chefs-d’œuvre de la peinture et de la sculpture comme Le Déjeuner sur l'herbe et l’Olympia d’Édouard Manet, une épreuve de La Petite Danseuse de quatorze ans de Degas, L'Origine du monde, Un enterrement à Ornans, L'Atelier du peintre de Courbet, Les joueurs de cartes de Cézanne ou encore cinq tableaux de la Série des Cathédrales de Rouen de Monet et Bal du moulin de la Galette de Renoir.",
      release_date:"1977-05-25"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Opéra Garnier",
      poster_path:"../assets/images/Arc_de_Triomphe.jpg",
      original_title:"",
      overview:"L’opéra Garniera, ou palais Garniera, est un théâtre national à vocation lyrique et chorégraphique et un élément majeur du patrimoine du 9e arrondissement de Paris et de la capitale.\nL'édifice s'impose comme un monument particulièrement représentatif de l'architecture éclectique et du style historiciste de la seconde moitié du xixe siècle.\nCet opéra a été appelé « opéra de Paris » jusqu'en 1989, date à laquelle l'ouverture de l'opéra Bastille, également opéra de Paris, a influé sur son appellation. On le désigne désormais par le seul nom de son architecte : « opéra Garnier » ou « palais Garnier ». Les deux opéras sont aujourd'hui regroupés au sein de l'établissement public à caractère industriel et commercial « Opéra national de Paris », institution publique française dont la mission est de mettre en œuvre la représentation de spectacles lyriques ou de ballet, de haute qualité artistique. L'opéra Garnier fait l’objet d’un classement au titre des monuments historiques depuis le 16 octobre 1923.",
      release_date:"1977-05-25"
   },
   {
      id:181809,
      vote_average:8.1,
      title:"Musée national des Arts asiatiques - Guimet",
      poster_path:"",
      original_title:"",
      overview:"Le musée national des Arts asiatiques - Guimet, abrégé en MNAAG et appelé encore couramment musée Guimet, est un musée d'arts asiatiques situé à Paris. Conçu, lors de sa rénovation, en 1997, comme un grand centre de la connaissance des civilisations asiatiques au cœur de l’Europe, il présente aujourd'hui, regroupée dans un espace qui leur est dédié, l'une des plus complètes collections d'arts asiatiques au monde. \nLe musée s'est constitué à l'initiative d'Émile Guimet (1836-1918), industriel et érudit lyonnais. Grâce à des voyages en Égypte (le musée de Boulaq l'inspirera pour la muséographie de ses futurs musées), en Grèce, puis un tour du monde en 1876, avec des étapes au Japon, en Chine et en Inde, il réunit d'importantes collections d'objets d'art qu'il présenta à Lyon à partir de 1879. \nPar la suite, il se spécialise dans les objets d'art asiatiques et transfère ses collections dans le musée qu'il fait construire à Paris par Jules Chatron et qui est inauguré en 1889. Le bâtiment est réalisé avec les mêmes plans que le musée de Lyon. En 1927, le musée Guimet est rattaché à la Direction des musées de France et regroupe d'autres collections et legs de particuliers. C'est désormais la plus grande collection d'art asiatique hors d'Asie.",
      release_date:"1977-05-25"
   }
   ]}
	keyExtractor={(item) => item.id.toString()}
	renderItem={({item}) => <MonumentItem monument={item}/>}
	/>
	
	<Button style={styles.textinput} title='Naviguer'  onPress={() => {}}/>
	
	<View style={styles.rect7}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon6}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon name="search" style={styles.icon7}></FeatherIcon>
        <MaterialCommunityIconsIcon
          name="bell-outline"
          style={styles.icon8}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon name="mail" style={styles.icon9}></FeatherIcon>
      </View>
		  </View>
	
      

    )
    }
  
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  rect7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  icon6: {
    color: "#1da6fa",
    fontSize: 40
  },
  icon7: {
    color: "#1da6fa",
    fontSize: 40
  },
  icon8: {
    color: "#1da6fa",
    fontSize: 40
  },
  icon9: {
    color: "#1da6fa",
    fontSize: 40
  }
})

export default Accueil;

