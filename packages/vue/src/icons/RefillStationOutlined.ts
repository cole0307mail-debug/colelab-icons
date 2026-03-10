// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import RefillStationOutlinedSvg from '@colelab/icons-svg/es/asn/RefillStationOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'RefillStationOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: RefillStationOutlinedSvg }, slots);
  },
});
