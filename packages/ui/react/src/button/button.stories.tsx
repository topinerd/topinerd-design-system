export default { title: "Components/Button" };

import { Button } from "./button";

export const Primary = () => {
  return (
    <div>
      <Button variant="primary" size="s">
        Primary
      </Button>
      <Button variant="primary" size="m">
        Primary
      </Button>
      <Button variant="primary" size="s" disabled>
        Primary
      </Button>
      <Button variant="primary" size="m" disabled>
        Primary
      </Button>
    </div>
  );
};

export const Secondary = () => {
  return (
    <div>
      <Button variant="secondary" size="s">
        Secondary
      </Button>
      <Button variant="secondary" size="m">
        Secondary
      </Button>
      <Button variant="secondary" size="s" disabled>
        Secondary
      </Button>
      <Button variant="secondary" size="m" disabled>
        Secondary
      </Button>
    </div>
  );
};

export const Tertiary = () => {
  return (
    <div>
      <Button variant="tertiary" size="s">
        Tertiary
      </Button>
      <Button variant="tertiary" size="m">
        Tertiary
      </Button>
      <Button variant="tertiary" size="s" disabled>
        Tertiary
      </Button>
      <Button variant="tertiary" size="m" disabled>
        Tertiary
      </Button>
    </div>
  );
};

export const Outline = () => {
  return (
    <div>
      <Button variant="outline" size="s">
        Outline
      </Button>
      <Button variant="outline" size="m">
        Outline
      </Button>
      <Button variant="outline" size="s" disabled>
        Outline
      </Button>
      <Button variant="outline" size="m" disabled>
        Outline
      </Button>
    </div>
  );
};
