# Topinerd-Design-System (Topinerd 디자인 시스템)

## 소개 (Introduction)

`Topinerd-Design-System`은 일관되고 효율적인 사용자 인터페이스(UI) 개발을 지원하기 위한 포괄적인 시스템입니다. 본 시스템은 다음과 같은 핵심 요소들을 제공하여 Topinerd 프로젝트 전반의 디자인 및 개발 경험을 향상시키는 것을 목표로 합니다:

- **UI 컴포넌트 (UI Components)**: 재사용 가능하고 확장 가능한 UI 컴포넌트 라이브러리를 제공하여, 다양한 애플리케이션에서 일관된 사용자 경험을 신속하게 구축할 수 있도록 지원합니다.
- **디자인 토큰 (Design Tokens)**: 색상, 타이포그래피, 간격 등 핵심 디자인 속성을 추상화한 디자인 토큰을 관리하여, 디자인과 코드 간의 일관성을 유지하고 테마 적용 및 변경을 용이하게 합니다.
- **아이콘 디자인 리소스 (Icon Design Resources)**: 다양한 프로젝트에서 활용될 수 있는 통일된 스타일의 아이콘 세트를 제공하고 관리합니다.
- **피그마 플러그인 (Figma Plugin)**: 디자이너가 피그마(Figma)에서 직접 디자인 토큰과 컴포넌트를 활용하고, 개발팀과의 원활한 협업을 지원하는 플러그인을 제공합니다.
- **CSS 어댑터 (CSS Adapter)**: 원본 디자인 리소스(현재는 Figma에서 추출된 JSON 파일 형식)를 스타일 라이브러리에서 사용할 수 있도록 변환하는 역할을 합니다. 현재는 `vanilla-extract` 라이브러리와의 통합을 지원하며, 이를 통해 디자인과 개발 간의 데이터 흐름을 자동화하고 일관성을 강화합니다.

이 시스템은 Topinerd의 개발자와 디자이너 모두를 위해 설계되었으며, 공동의 디자인 언어를 기반으로 보다 빠르고 효율적으로 고품질의 디지털 프로덕트를 제작할 수 있도록 돕습니다.

## 저장소에 대하여 (About This Repo)

이 모노레포의 `packages/` 디렉토리에는 다음과 같은 주요 패키지들이 포함되어 있습니다:

| Package Name                                 | Description (Korean)                                                                                                                |
| :------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| `@topinerd-design-system/react`              | Topinerd 디자인 시스템의 핵심 React 컴포넌트 및 관련 유틸리티를 제공합니다.                                                         |
| `@topinerd-design-system/react-icons`        | Topinerd 디자인 시스템에서 사용되는 React 아이콘 컴포넌트 컬렉션입니다.                                                             |
| `@topinerd-design-system/preset`             | 원본 디자인 토큰을 `vanilla-extract` 스타일 라이브러리에서 이용 가능한 형태로 외부에 제공해주는 패키지입니다.                       |
| `@topinerd-design-system/resource-extractor` | 피그마(Figma) 애플리케이션에서 관리하고 있는 디자인 토큰과 아이콘을 추출하여 코드베이스에 자동으로 옮기는 역할을 하는 패키지입니다. |
| `@topinerd-design-system/design-icons`       | Topinerd 디자인 시스템의 SVG 아이콘 원본 파일 및 관련 리소스를 관리합니다.                                                          |
| `@topinerd-design-system/design-tokens`      | Topinerd 디자인 시스템의 색상, 타이포그래피, 간격 등 핵심 디자인 속성을 정의한 토큰 원본 파일(예: JSON)을 관리합니다.               |

## 시작하기 (Getting Started)

### 1. 라이브러리 설치 (Installation)

Topinerd 디자인 시스템 라이브러리 사용을 위해서는 최소 2개의 패키지 의존성 설치가 필요합니다.

- `@topinerd-design-system/react`: 핵심 React 컴포넌트를 제공합니다.
- `@topinerd-design-system/preset`: `color`, `radius` 등 기본적인 디자인 토큰 및 테마 CSS를 제공합니다.

다음 명령어를 사용하여 프로젝트에 패키지를 추가합니다:

```bash
pnpm add @topinerd-design-system/react @topinerd-design-system/preset
```

### 2. 전역 스타일 설정 (Global Styles Setup)

프로젝트의 진입점(entry point) 파일(예: `main.tsx`, `App.tsx` 등)에 다음과 같이 전역으로 필요한 기본 CSS 파일들을 import 합니다. 이 스타일들은 디자인 시스템 컴포넌트가 올바르게 표시되기 위해 필요합니다.

```typescript
// 예시: src/main.tsx 또는 src/App.tsx
import "@topinerd-design-system/preset/theme.css"; // 디자인 토큰 및 기본 테마 스타일
import "@topinerd-design-system/react/style.css"; // React 컴포넌트 기본 스타일

// ... 기타 애플리케이션 코드
```

### 3. 컴포넌트 사용 예시 (Basic Usage)

이제 Topinerd 디자인 시스템의 컴포넌트를 가져와 사용할 수 있습니다. 다음은 `Button` 컴포넌트 사용 예시입니다:

```tsx
import { Button } from "@topinerd-design-system/react";

function MyApp() {
  return (
    <div>
      <Button onClick={() => alert("Button clicked!")}>안녕하세요!</Button>
    </div>
  );
}

export default MyApp;
```

### 4. 프리셋 사용 예시 (Preset Usage Example)

`@topinerd-design-system/preset` 패키지에서 제공하는 `theme` 객체를 사용하여 커스텀 스타일을 적용할 수 있습니다. `theme` 객체에는 사전에 정의된 색상(color), 간격(spacing), 반지름(radius) 등의 디자인 토큰 값들이 포함되어 있습니다.

다음은 `vanilla-extract`를 사용하여 `theme` 객체의 값을 참조하여 스타일을 정의하는 예시입니다:

```typescript
import { style } from "@vanilla-extract/css";
import { theme } from "@topinerd-design-system/preset";

export const customComponent = style({
  // theme 객체에서 primary 색상 토큰을 참조하여 배경색 적용
  backgroundColor: theme.color.background.fill.default,
  // theme 객체에서 radius 토큰을 참조하여 테두리 둥글기 적용
  borderRadius: theme.radius["radius-2xl"],
  // theme 객체에서 spacing 토큰을 참조하여 내부 여백 적용
  padding: `${theme.spacing["spacing-sm"]} ${theme.spacing["spacing-lg"]}`,
  // 기타 스타일들...
});
```

> VSCode와 같은 코드 편집기에서 **타입 자동 완성(Type IntelliSense) 기능을 지원**합니다.
