// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BuildingOutlinedSvg from '@colelab/icons-svg/es/asn/BuildingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BuildingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BuildingOutlinedSvg }, slots);
  },
});
