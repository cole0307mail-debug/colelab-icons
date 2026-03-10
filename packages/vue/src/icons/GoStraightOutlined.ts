// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import GoStraightOutlinedSvg from '@colelab/icons-svg/es/asn/GoStraightOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'GoStraightOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: GoStraightOutlinedSvg }, slots);
  },
});
