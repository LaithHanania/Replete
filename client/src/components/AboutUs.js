import React from "react";
import { Box, Typography, Container} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const AboutUsContainer = withStyles({
  root: {
    backgroundColor: "#FFEFD5",
    borderRadius: 16,
  },
})(Box);

const Text = withStyles({
  root: {
    color: "#3C3939",
    textAlign: "center",
  },
})(Typography);

const Section = withStyles({
  root: { paddingBottom: "24px" },
})(Box);

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Container maxWidth="lg">
        <Section>
          <Text variant="h4">
            Our Mission
          </Text>
          <Box fontStyle="italic">
            <Text>
              To help people learn about their habits, track their self
              improvement and measure their success using solid data points and
              criteria they set for themselves
            </Text>
          </Box>
        </Section>
        <Section>
          <Text variant="h4">
            Our Approach
          </Text>
          <Text>
            We believe that each person lives a very unique life, and thus
            judges it very differently. The criteria by which a person judges
            their life according to is unique to them, which is why we allow
            users to set their own criteria to measure themselves by. We
            encourage our users to diversify their criteria, to incorporate
            health, finances, happiness and mindfulness. We also understand that
            not all criterias are valued equally, which is why we allow users to
            give each criteria a weight. A core part of our approach is that it
            is event-based, meaning that each event contributes to your life,
            and thus has some value to your criterias. By consistently adding
            events, you can start to see a pattern form which uncovers how you
            live your life. This gives you the opportunity to make the changes
            in your life, in choosing your lifes events more carefully for a
            better outcome.
          </Text>
        </Section>
        <Section>
          <Text variant="h4">
            Our Inspiration
          </Text>
          <Text>
            This started when we first realized how much data companies collect
            from us on a daily basis. Facebook collects 4 petabytes of data per
            day. Thats one million gigabytes per day. Google collects more than
            five times that. Every click, keystroke, post, etc... is registered
            and processed. How much data do we collect about ourselves? All this
            to say that at some point, these companies know more about us than
            we do about ourselves.
          </Text>
        </Section>
        <Section>
          <Text variant="h4" align="center">
            Whats Next?
          </Text>
          <Box fontStyle="italic">
            <Text>Filter chart by criteria</Text>
            <Text>Weekly report</Text>
            <Text>Suggested Criteria</Text>
            <Text>Caching for performance</Text>
            <Text>MongoDB indexing for performance</Text>
            <Text>User settings</Text>
            <Text>Suggested Criteria</Text>
            <Text>Refined color palette</Text>
            <Text>Percentage changes for each criteria</Text>
            <Text>Service workers for offline work</Text>
          </Box>
        </Section>
      </Container>
    </AboutUsContainer>
  );
};

export default AboutUs;
