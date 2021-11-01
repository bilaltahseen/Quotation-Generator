import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from '@david.kucsai/react-pdf-table';
import Logo from '../../assets/images/logo.png';

interface Feature {
  id: number;
  title: string;
  description: string;
}

interface Props {
  projectName: string;
  projectDescription: string;
  projectQotationList: Feature[];
  projectClientName: string;
  projectPrice: string;
}
Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    textAlign: 'center',
    fontFamily: 'Oswald',
  },
  descriptionTitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald',
  },
  descriptionText: {
    margin: 12,
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: 'light',
  },

  header: {
    fontSize: 28,
    marginTop: 100,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  logo: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 100,
    height: 100,
  },
  client: {
    position: 'absolute',
    textDecoration: 'underline',
    fontSize: 12,
    right: 0,
    bottom: 20,
    margin: 12,
  },
  price: {
    fontSize: 14,
    color: 'red',
    marginTop: 10,
  },

  generated: {
    fontSize: 11,
    position: 'absolute',
    display: 'flex',
    alignSelf: 'center',
    bottom: 10,
    textAlign: 'center',
    color: 'grey',
  },
});

const QoutationRenderer = ({
  projectName,
  projectDescription,
  projectQotationList,
  projectClientName,
  projectPrice,
}: Props) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Image src={Logo} style={styles.logo} />
        <Text style={styles.header}>QUOTATION FOR PROJECT</Text>
        <Text style={styles.subtitle}>{projectName}</Text>
        <Text style={styles.descriptionTitle}>Project Description:</Text>
        <Text style={styles.descriptionText}>{projectDescription}</Text>

        <Text style={styles.subtitle}>Quotation</Text>
        <Table data={projectQotationList}>
          <TableHeader>
            <TableCell weighting={0.1}>#</TableCell>
            <TableCell weighting={0.5}>Feature Name</TableCell>
            <TableCell>Feature Description</TableCell>
          </TableHeader>
          <TableBody>
            <DataTableCell weighting={0.1} getContent={(r) => r.id} />
            <DataTableCell weighting={0.5} getContent={(r) => r.title} />
            <DataTableCell getContent={(r) => r.description} />
          </TableBody>
        </Table>
        <Text style={styles.price}>Total Price :{projectPrice}</Text>
        <Text style={styles.client}>Client Name : {projectClientName}</Text>
        <Text style={styles.generated} fixed>
          ~ Computer generated qotation signature is not required ~
        </Text>
      </Page>
    </Document>
  );
};

export default QoutationRenderer;
