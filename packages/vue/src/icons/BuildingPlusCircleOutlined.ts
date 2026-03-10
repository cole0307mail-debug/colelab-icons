// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BuildingPlusCircleOutlinedSvg from '@colelab/icons-svg/es/asn/BuildingPlusCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BuildingPlusCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BuildingPlusCircleOutlinedSvg }, slots);
  },
});
