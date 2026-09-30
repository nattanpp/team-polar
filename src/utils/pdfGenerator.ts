import { jsPDF } from 'jspdf';
import { 
  MISSION_FACTS, 
  TECHNICAL_COMPARISONS, 
  PARTNER_TIERS, 
  PARTNERSHIP_BENEFITS_MATRIX,
  CONTACT_INFO, 
  TEAM_METRICS,
  PRESS_MENTIONS 
} from '../data/teamData';

export function downloadExpeditionBriefing(type: 'sponsor' | 'press' = 'sponsor') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  const navy: [number, number, number] = [11, 19, 43];      
  const iceBlue: [number, number, number] = [124, 189, 232]; 
  const darkSlate: [number, number, number] = [30, 41, 59];  
  const mutedSlate: [number, number, number] = [100, 116, 139]; 
  const lightBg: [number, number, number] = [248, 250, 252]; 
  const borderGrey: [number, number, number] = [226, 232, 240];

  const totalPages = 4;

  const renderHeader = (pageNumber: number, titleText: string, subtitleText: string) => {
    doc.setFillColor(...navy);
    doc.rect(0, 0, pageWidth, 24, 'F');

    doc.setFillColor(...iceBlue);
    doc.rect(0, 24, pageWidth, 1.8, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.text('TEAM POLAR • ANTARCTICA 2026', margin, 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(
      type === 'sponsor' 
        ? 'OFFICIAL PARTNER PROSPECTUS & CORPORATE BRIEFING' 
        : 'OFFICIAL EXPEDITION MEDIA & TECHNICAL PRESS KIT',
      margin, 17.5
    );

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text('EINDHOVEN UNIVERSITY OF TECHNOLOGY', pageWidth - margin, 11, { align: 'right' });
    doc.setFont('helvetica', 'normal');
    doc.text('TU/e Innovation Space & Matrix', pageWidth - margin, 17.5, { align: 'right' });
  };

  const renderFooter = (pageNumber: number) => {
    const footY = pageHeight - 14;
    doc.setDrawColor(...borderGrey);
    doc.line(margin, footY - 3, pageWidth - margin, footY - 3);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...mutedSlate);
    doc.text('Team Polar Official Expedition Document • info@teampolar.org • teampolar.org', margin, footY + 2);
    doc.text(`Page ${pageNumber} of ${totalPages}`, pageWidth - margin, footY + 2, { align: 'right' });
  };

  renderHeader(1, 'EXECUTIVE DIRECTIVE', 'The 1,150 km Continental Traverse');

  let y = 35;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(
    type === 'sponsor'
      ? '1. EXECUTIVE SUMMARY: THE 1,150 KM ANTARCTIC TRAVERSE'
      : '1. MISSION BRIEFING: ZERO-EMISSION POLAR EXPLORATION',
    margin, y
  );
  y += 7;

  doc.setTextColor(...darkSlate);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  const p1Lead = 
    `Team Polar is a premier student-led robotics and clean-tech innovation team from Eindhoven University of ` +
    `Technology (TU/e), comprising 57 researchers and engineers across 14 academic disciplines. The team is developing ` +
    `"Gentoo", the world's first fully autonomous, solar-powered polar exploration rover. In 2026, Gentoo will undertake ` +
    `an unassisted 1,150-kilometre expedition between Princess Elisabeth Antarctica and Kohnen Station across the Antarctic Plateau.`;
  const splitLead = doc.splitTextToSize(p1Lead, contentWidth);
  doc.text(splitLead, margin, y);
  y += splitLead.length * 4.6 + 6;

  doc.setFillColor(...lightBg);
  doc.rect(margin, y, contentWidth, 20, 'F');
  doc.setDrawColor(...borderGrey);
  doc.rect(margin, y, contentWidth, 20, 'S');

  const colW = contentWidth / 4;
  const missionMetrics = [
    { label: 'TRAVERSE ROUTE', val: '1,150 KM' },
    { label: 'EXPEDITION YEAR', val: 'AUSTRAL 2026' },
    { label: 'VEHICLE MASS', val: '320 KG' },
    { label: 'TEMPERATURE', val: '-80°C RATED' },
  ];

  missionMetrics.forEach((m, idx) => {
    const colX = margin + idx * colW + 4;
    doc.setTextColor(...mutedSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.text(m.label, colX, y + 6.5);

    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(m.val, colX, y + 14);
  });
  y += 27;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('THE THREEFOLD MISSION DIRECTIVE', margin, y);
  y += 6;

  const threefold = [
    {
      title: 'Improve Antarctic Mobility',
      desc: 'Replace fossil-fuelled heavy logistics with zero-emission, autonomous solar-powered transit across 1,150 km of uncharted ice.'
    },
    {
      title: 'Develop Innovative Polar Tech',
      desc: 'Pioneer custom 3D-printed TPU airless wheels, cuboid aerodynamic shell, sensor fusion (LiDAR & cameras), and extreme-cold autonomy.'
    },
    {
      title: 'Real Professional Engineering Learning',
      desc: 'Provide an intensive multidisciplinary engineering environment where students design, build, test, and qualify hardware for Earth\'s harshest continent.'
    }
  ];

  threefold.forEach((p, idx) => {
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, contentWidth, 13.5, 'F');
    doc.setDrawColor(...borderGrey);
    doc.rect(margin, y, contentWidth, 13.5, 'S');

    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(`0${idx + 1}. ${p.title.toUpperCase()}`, margin + 3.5, y + 5);

    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const splitDesc = doc.splitTextToSize(p.desc, contentWidth - 7);
    doc.text(splitDesc, margin + 3.5, y + 9.5);

    y += 16.5;
  });
  y += 4;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('EXTREME ANTARCTIC ENVIRONMENTAL CONDITIONS', margin, y);
  y += 6;

  const conditions = [
    { name: 'Minimum Temperatures', val: 'Down to -80°C (-40°C during operational traverse)' },
    { name: 'Katabatic Winds', val: 'Sustained winds up to 200 km/h (35 m/s aerodynamic rating)' },
    { name: 'Crevasse Margins', val: 'Chasms up to 100 metres deep requiring real-time LiDAR detection' },
    { name: 'Current Logistics', val: 'Heavy kerosene-fuelled snow cats and aircraft causing emissions' }
  ];

  conditions.forEach((c) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...navy);
    doc.text(`• ${c.name}:`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...darkSlate);
    doc.text(c.val, margin + 44, y);
    y += 5.5;
  });

  renderFooter(1);

  doc.addPage();
  renderHeader(2, 'ENGINEERING AUDIT', 'Gentoo Rover Specifications & Testing');

  y = 35;
  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('2. GENTOO ROVER BLUEPRINT & ENGINEERING AUDIT', margin, y);
  y += 7;

  doc.setTextColor(...darkSlate);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const p2Lead = 
    `Gentoo is engineered from the ground up for continuous autonomous traverse over unstructured sastrugi and polar ice. ` +
    `Drawing on lessons from the 1st generation Ice Cube prototype, Gentoo features custom 3D-printed TPU airless running gear, ` +
    `a 6 m² photovoltaic canopy, and an insulated hermetic core.`;
  const splitP2 = doc.splitTextToSize(p2Lead, contentWidth);
  doc.text(splitP2, margin, y);
  y += splitP2.length * 4.4 + 5;

  TECHNICAL_COMPARISONS.slice(0, 9).forEach((spec) => {
    doc.setFillColor(241, 245, 249);
    doc.rect(margin, y, 48, 6.5, 'F');
    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(spec.metric, margin + 2.5, y + 4.5);

    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const valText = `${spec.gentooValue} — ${spec.notes}`;
    const truncatedVal = doc.splitTextToSize(valText, contentWidth - 52)[0];
    doc.text(truncatedVal, margin + 51, y + 4.5);

    doc.setDrawColor(241, 245, 249);
    doc.line(margin, y + 6.5, margin + contentWidth, y + 6.5);
    y += 7.2;
  });
  y += 5;

  doc.setFillColor(...lightBg);
  doc.rect(margin, y, contentWidth, 38, 'F');
  doc.setDrawColor(...borderGrey);
  doc.rect(margin, y, contentWidth, 38, 'S');

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('EMPIRICAL FIELD TESTING VALIDATION: ARJEPLOG, SWEDEN', margin + 4, y + 6.5);

  doc.setTextColor(...darkSlate);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const testDesc = 
    `Conducted over 3 intensive days in sub-zero Arctic conditions with 20 engineers. Gentoo achieved complete ` +
    `operational benchmark goals: climbed an 11.3° incline on compacted snow and blue ice, delivering 834 N mean pull ` +
    `traction and up to 1,300 N peak traction on fresh powder snow.`;
  const splitTest = doc.splitTextToSize(testDesc, contentWidth - 8);
  doc.text(splitTest, margin + 4, y + 12);

  const testStats = [
    { label: 'INCLINE CLIMBED', val: '11.3° SLOPES' },
    { label: 'PACKED SNOW PULL', val: '834 N FORCE' },
    { label: 'POWDER TRACTION', val: '1,300 N PEAK' }
  ];
  const tColW = (contentWidth - 8) / 3;
  testStats.forEach((ts, idx) => {
    const tx = margin + 4 + idx * tColW;
    doc.setTextColor(...mutedSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.text(ts.label, tx, y + 27);

    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text(ts.val, tx, y + 33);
  });

  renderFooter(2);

  doc.addPage();
  renderHeader(3, 'PARTNERSHIP MATRIX', 'Corporate Deliverables & Brand Exposure');

  y = 35;
  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text(
    type === 'sponsor'
      ? '3. CORPORATE PARTNERSHIP TIERS & DELIVERABLES MATRIX'
      : '3. PARTNERSHIP ECOSYSTEM & INDUSTRIAL ALLIANCES',
    margin, y
  );
  y += 6;

  doc.setTextColor(...darkSlate);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  const p3Lead = 
    `Team Polar partners are organized into six tiers named after Antarctic penguin species in decreasing height order ` +
    `(Emperor ~120 cm down to Rockhopper ~50 cm). Each tier delivers structured value across brand exposure, ` +
    `recruitment access to TU/e engineering talents, and collaborative technical milestone integration.`;
  const splitP3 = doc.splitTextToSize(p3Lead, contentWidth);
  doc.text(splitP3, margin, y);
  y += splitP3.length * 4.2 + 5;

  doc.setFillColor(...lightBg);
  doc.rect(margin, y, contentWidth, 14, 'F');
  doc.setDrawColor(...borderGrey);
  doc.rect(margin, y, contentWidth, 14, 'S');

  const pTierW = contentWidth / 6;
  PARTNER_TIERS.forEach((pt, idx) => {
    const px = margin + idx * pTierW + 2;
    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text(pt.tierName.replace(' Tier', '').replace(' & Other Supporters', ''), px, y + 5);

    doc.setTextColor(...mutedSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.text(`~${pt.speciesHeightCm} cm`, px, y + 10.5);
  });
  y += 18;

  doc.setFillColor(...navy);
  doc.rect(margin, y, contentWidth, 7, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.5);
  doc.text('DELIVERABLE / PERK', margin + 2, y + 4.8);
  doc.text('EMPEROR', margin + 70, y + 4.8);
  doc.text('KING', margin + 98, y + 4.8);
  doc.text('GENTOO', margin + 122, y + 4.8);
  doc.text('CHINSTRAP', margin + 146, y + 4.8);
  doc.text('SUPPORT', margin + 168, y + 4.8);
  y += 7;

  PARTNERSHIP_BENEFITS_MATRIX.slice(0, 8).forEach((b, idx) => {
    const rowBg = idx % 2 === 0 ? 255 : 248;
    doc.setFillColor(rowBg, rowBg, rowBg);
    doc.rect(margin, y, contentWidth, 7, 'F');
    doc.setDrawColor(...borderGrey);
    doc.line(margin, y + 7, margin + contentWidth, y + 7);

    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    const deliv = doc.splitTextToSize(b.deliverable, 66)[0];
    doc.text(deliv, margin + 2, y + 4.8);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(6.5);
    doc.setTextColor(...darkSlate);

    const fmt = (val: boolean | string) => {
      if (val === true) return 'Included';
      if (val === false) return '—';
      return String(val);
    };

    doc.text(fmt(b.emperor).substring(0, 16), margin + 70, y + 4.8);
    doc.text(fmt(b.king).substring(0, 14), margin + 98, y + 4.8);
    doc.text(fmt(b.gentoo).substring(0, 14), margin + 122, y + 4.8);
    doc.text(fmt(b.chinstrap).substring(0, 12), margin + 146, y + 4.8);
    doc.text(fmt(b.adelie).substring(0, 10), margin + 168, y + 4.8);

    y += 7;
  });
  y += 6;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.text('KEY ACTIVE CORPORATE & INSTITUTIONAL PARTNERS', margin, y);
  y += 5;

  const partnerHighlights = [
    '• Emperor Tier: TU/e (Eindhoven University of Technology), TNO',
    '• King Tier: TU/e Innovation Space, NXP Semiconductors',
    '• Gentoo Tier: EY, MITO Solar, Holit, Septentrio, Infinite Simulation Systems (Ansys), Altium, Snickers Workwear',
    '• Chinstrap Tier: Universiteitsfonds Eindhoven (UFe), RS, Uithof, Phoenix Contact',
    '• Adélie & Rockhopper: Siemens, Altair, Farnell, Segger, Würth Elektronik, Gochermann Solar, Eriks, Aisler'
  ];

  partnerHighlights.forEach((ph) => {
    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(ph, margin, y);
    y += 4.6;
  });

  renderFooter(3);

  doc.addPage();
  renderHeader(4, 'TALENT & CONTACT', 'Recruitment Pipeline & Official Desk');

  y = 35;
  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('4. MULTIDISCIPLINARY TALENT PIPELINE & CONTACT DESK', margin, y);
  y += 6;

  doc.setTextColor(...darkSlate);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const p4Lead = 
    `Team Polar represents Eindhoven University of Technology's premier multidisciplinary engineering talent. ` +
    `Our 57 student engineers encompass Mechanical, Electrical, Computer Science, Artificial Intelligence, Aerospace, ` +
    `and Industrial Engineering disciplines, providing partners with unprecedented access to future industry leaders.`;
  const splitP4 = doc.splitTextToSize(p4Lead, contentWidth);
  doc.text(splitP4, margin, y);
  y += splitP4.length * 4.4 + 5;

  doc.setFillColor(...lightBg);
  doc.rect(margin, y, contentWidth, 18, 'F');
  doc.setDrawColor(...borderGrey);
  doc.rect(margin, y, contentWidth, 18, 'S');

  const tCol = contentWidth / 4;
  const talentStats = [
    { label: 'ACTIVE TALENTS', val: '57 MEMBERS' },
    { label: 'FULL-TIME ENGINEERS', val: '8 DEDICATED' },
    { label: 'NATIONALITIES', val: '25 COUNTRIES' },
    { label: 'ACADEMIC MAJORS', val: '14 DEGREE FIELDS' }
  ];

  talentStats.forEach((ts, idx) => {
    const tx = margin + idx * tCol + 4;
    doc.setTextColor(...mutedSlate);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.text(ts.label, tx, y + 6);

    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.text(ts.val, tx, y + 13.5);
  });
  y += 24;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('CORPORATE RECRUITMENT COLLABORATION FORMATS', margin, y);
  y += 5.5;

  const collabFormats = [
    {
      title: 'Dedicated On-Campus Case Nights',
      detail: 'Host tailored technical engineering challenge evenings at TU/e Innovation Space exclusively for your recruitment team.'
    },
    {
      title: 'Curated Talent Directory & CV Book',
      detail: 'Receive priority access to graduating bachelor and master candidates across mechanical, embedded software, and energy systems.'
    },
    {
      title: 'Engineering Guest Lectures & Tech Talks',
      detail: 'Engage the team and wider university audience with corporate presentations, masterclasses, and Antarctic explorer talks.'
    }
  ];

  collabFormats.forEach((cf) => {
    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text(`• ${cf.title}:`, margin, y);

    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    const splitDetail = doc.splitTextToSize(cf.detail, contentWidth - 4);
    doc.text(splitDetail, margin + 4, y + 4.5);
    y += splitDetail.length * 4 + 4;
  });
  y += 4;

  doc.setTextColor(...navy);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('RECENT EXPEDITION MILESTONES & SCIENTIFIC CITATIONS', margin, y);
  y += 5.5;

  PRESS_MENTIONS.slice(0, 3).forEach((pm) => {
    doc.setTextColor(...navy);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text(`[${pm.date}] ${pm.headline}`, margin, y);

    doc.setTextColor(...darkSlate);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    const splitM = doc.splitTextToSize(pm.summary, contentWidth - 4);
    doc.text(splitM, margin + 4, y + 4);
    y += splitM.length * 3.8 + 3.5;
  });
  y += 3;

  doc.setFillColor(...navy);
  doc.rect(margin, y, contentWidth, 28, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text('OFFICIAL PARTNERSHIP & MEDIA LIAISON DESK', margin + 5, y + 7);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...iceBlue);
  doc.text('PARTNERSHIP MANAGER: Savvas Saragiotis | EXTERNAL AFFAIRS & PRESS: Polina Savelyeva', margin + 5, y + 13);

  doc.setTextColor(255, 255, 255);
  doc.text(`Email: ${CONTACT_INFO.email} | Phone: ${CONTACT_INFO.phone}`, margin + 5, y + 18.5);
  doc.text(
    `Headquarters: TU/e Innovation Space, ${CONTACT_INFO.primaryLocation.street}, ${CONTACT_INFO.primaryLocation.postalCode} Eindhoven, The Netherlands`,
    margin + 5, y + 23.5
  );

  renderFooter(4);

  const filename = type === 'sponsor' 
    ? 'Team_Polar_Official_Partner_Prospectus_2026.pdf'
    : 'Team_Polar_Official_Press_Media_Kit_2026.pdf';
  doc.save(filename);
}
